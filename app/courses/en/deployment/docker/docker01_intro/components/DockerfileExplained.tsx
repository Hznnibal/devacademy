import { CodeBlock } from "@/components/CodeBlock/code-block";

export function DockerfileExplained() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Understanding Dockerfile</h2>
            <p className=" mb-4">
                A Dockerfile is a text file that contains instructions for building a Docker image. Here's a simple example:
            </p>
            <div className="bg-card p-6 rounded-lg">
                <CodeBlock code={`# Use Node.js as the base image
  FROM node:18
  
  # Set the working directory
  WORKDIR /app
  
  # Copy package files
  COPY package*.json ./
  
  # Install dependencies
  RUN npm install
  
  # Copy application files
  COPY . .
  
  # Expose port 3000
  EXPOSE 3000
  
  # Start the application
  CMD ["npm", "start"]`} />
                <div className="space-y-2 text-sm ">
                    <p><strong>FROM:</strong> Specifies the base image to use</p>
                    <p><strong>WORKDIR:</strong> Sets the working directory inside the container</p>
                    <p><strong>COPY:</strong> Copies files from your computer to the container</p>
                    <p><strong>RUN:</strong> Executes commands during image build</p>
                    <p><strong>EXPOSE:</strong> Documents which ports the container will use</p>
                    <p><strong>CMD:</strong> Specifies the command to run when the container starts</p>
                </div>
            </div>
        </section>
    );
}