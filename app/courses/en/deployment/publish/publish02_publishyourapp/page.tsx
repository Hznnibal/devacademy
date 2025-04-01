import { DatabaseSetup } from './components/DatabaseSetup';
import { DeploymentSteps } from './components/DeploymentSteps';
import { Monitoring } from './components/Monitoring';
import { Platform } from './components/Platform';
import { PreparationSteps } from './components/PreparationSteps';

export default function SymfonyDeploy() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold mb-8">Free Symfony Deployment Guide</h1>

            <div className="bg-card p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-3">Overview</h2>
                <p className="">
                    This guide will walk you through deploying your Symfony application for free using Platform.sh's free tier. We'll cover everything from preparation to monitoring your deployed application.
                </p>
            </div>

            <Platform />
            <PreparationSteps />
            <DatabaseSetup />
            <DeploymentSteps />
            <Monitoring />
        </div>
    );
}