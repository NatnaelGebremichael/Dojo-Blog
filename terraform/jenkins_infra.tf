provider "aws" {
  region = "us-east-1" # Change to your desired region
}

resource "aws_instance" "jenkins_instance" {
  ami             = "ami-0c55b159cbfafe1f0" # Amazon Linux 2 AMI ID
  instance_type   = "t2.micro"
  key_name        = "jenkins-key"
  security_groups = ["jenkins-security-group"]

  tags = {
    Name = "JenkinsInstance"
  }
}

resource "aws_security_group" "jenkins_security_group" {
  name_prefix = "jenkins-sg-"

  // Configure your security group rules here
  // Ingress rules (inbound traffic)
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] // Allow SSH from anywhere
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] // Allow HTTP from anywhere
  }

  // Egress rules (outbound traffic)
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"] // Allow all outbound traffic
  }
}

resource "aws_eip" "jenkins_eip" {
  instance = aws_instance.jenkins_instance.id
}

output "jenkins_ip" {
  value = aws_eip.jenkins_eip.public_ip
}
