McKean McGregor agent listings card service
===========================================

What it does (Bec Allen's own repository and Vercel project)
- /api/agent-card?a=EMAIL&n=1 ... n=6   Image of the agent's 1st to 6th listing, drawn in the website style.
                                        Empty slots return a 1040 by 1 transparent strip so they collapse.
- /api/agent-count?a=EMAIL              Image of the count line, for example "Featuring 6 of my 28 current listings".
- /api/agent-go?a=EMAIL&n=1 ... n=6     Sends the reader to that listing. Empty slot goes to the agent's listings page.
- /api/agent-go?a=EMAIL&n=all           Sends the reader to the agent's listings page.
- /api/agent-list?a=EMAIL               Plain text list for checking, starting with the total count.

It reads the public listings page only. No Rex login or API key is used or stored.
It keeps a copy of each agent's pages for 5 minutes.
This repository serves one agent only: Bec Allen (see lib/agents.js). An email that is not listed there shows nothing
and links to https://mckeanmcgregor.com.au/listings

This is its own repository and its own Vercel project. It does not share files with the open homes service.

Deploy
1. GitHub: New repository, upload the api folder, the lib folder, package.json and this README, commit.
2. Vercel: Add New, Project, pick the repository, Deploy. Leave every setting as it is.
3. Send the Vercel address to Claude to put into the Rex agent template.
