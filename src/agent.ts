import { Agent } from "@sap/ai-sdk";

export class FinalAgent extends Agent {
  async run(input: string): Promise<string> {
    return `Processed: ${input}`;
  }
}