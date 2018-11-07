# Holochain DevCamp Alpha Oct 2018

## Holochain DevCamp Team
- Mickki - Operations
- Chris Minnick - Tutor
- Conor Turland - Developer Training & Documentation - Core dev team

**Holochains,** by design, should be used in the context of a group operating by a shared set of agreements.
These agreements are encoded in the validation rules (DNA) which are checked before authoring to one's local chain, and are also checked by every DHT node asked to publish the new data.
If you commit things to your chain, or try to publish things which don't comply with the validation rules, the rest of the network/DHT rejects it.

## Holochain App (hApp)
- Entries - Each unit of data is an entry and has an entry type
Configure schema for a task entry
- Zomes - A Zome is a place where we define logical schemas (entry types) and functions.
Inputs need to be valid

## Developer Portal
https://developer.holochain.org/

## Holochain API

Hoochain API functions can called from our JavaScript Zome
https://developer.holochain.org/API

## Holochain API
- Commit - Write to local src chain  
      entryType: string
      entryData: any-type

      Returns: hash-string OR error

Get - Get from local src chain

TypeScript
Holochain TypeScript Template Repo

## Linking
Distrbute Hash Table - When your data gets gossiped out to the DHT (your peers).
Need to be able ot retrienve data from across the network.
Create links between different entries on the DHT
Link has a base (hash of entry), a Link (a target - has of entry that it's to), tag (string describes relationship between the 2 things)
Used to create a graph within the DHT
App.Key.Hash is an identifier for the current user.

Links is a special datatype within Holochain

## Entry Type: Links
A Links entry has:
- Base: hash - thing being linked from
- Link/Target: hash - thing being linked to
- Tag: string - describes the relationship between
```
  commit("taskLink", {
    Links: [
      {Base: App.Key.Hash, Link: hash, Tag: 'has task'}
    ]
  });
```

## Validation Functions:

https://developer.holochain.org/Validation_Functions

- validateCommit
- validatePut - Triggered when you receive as a node in the network a request from someone else to store an entry into your local DHT. Entries must pass
  'validatePut' to be written to the DHT.
- validateMod - Triggered when you call update on an entry.
- validateDel - Triggered when you call a remove.
- validateLink - Special case for Links entry type.

```
/**
 * Called to validate any changes to the local chain or DHT
 * entryType
 */
validateCommit(entryType, entry, header, pkg, sources)
```
You have to define validateCommit

[Command Line Tools](https://developer.holochain.org/Command_Line_Tools)

## HoloWorld

- [HoloWorld Tutorial](https://developer.holochain.org/HoloWorld_Tutorial_Creating_the_App_Folder)
- [Creating the App Folder](https://developer.holochain.org/HoloWorld_Tutorial_Creating_the_App_Folder)
- [Writing the application DNA](https://developer.holochain.org/HoloWorld_Tutorial_Writing_the_application_DNA)
- [Validation Functions](https://developer.holochain.org/Validation_Functions)

```
hcdev init HoloWorld
```

## Test Driven Development
[Test Driven Development](https://developer.holochain.org/Test_Driven_Development)

## Quiz Questions

1. What is Holochain?

  Select one:
  - A kind of blockchain.
  - A holographic way to store cryptocurrency.
  - A technology framework for distributed peer-to-peer applications. (Correct!)
  - A functional programming language.


2. A local source chain is the successive use of cryptographic hash functions to data entries to provide confidence in data integrity.

3. What is the name of the project associated with Holochain created to bring the benefits of distributed apps to anyone with a web browser?

  Answer: Holo

4. What languages can be used to write Holochain apps (using holochain-proto)?

  Select one or more:
  - a. Lisp (Yes)
  - b. Java
  - c. AssemblyScript
  - d. Rust
  - e. Go
  - f. JavaScript (Yes)
  - g. C++


5. What is the correct syntax for initializing a new Holochain app folder?

  Select one:
  - hcdev init your-app-name (Yes)
  - hcdev create your-app-name
  - hcdev generate your-app-name
  - hcdev package your-app-name  


6. A file that acts as the entry point to run a Holochain application and that contains the applications schemas and zomes.

  Answer: DNA

7. A structure that enables data to be shared across many machines: easily retrieved, untampered proof by hash.

  Answer: DHT

8. A hash is useful because it can be easily inverted.

  Select one:
  - True
  - False (Correct!)


9. Match the concept up with whether it's a property of Holochain or of Blockchain.

  - Holochain - Mutual Sovereignty
  - Blockchain	- Global Consensus


10. Match the terms to their definitions.
A structure that enables data to be shared across many machines: easily retrieved, untampered proof by hash.

  Answer: DHT

11. A file that acts as the entry point to run a Holochain application and that contains the applications schemas and zomes.

  Answer: DNA

12. What is order of events in a token life cycle?

  - Interplay, Transaction, Issuance, Redemption & Retirement
  - Issuance, Transaction, Interplay, Redemption & Retirement (Correct!)
  - Redemption & Retirement, Interplay, Issuance, Transaction
  - Buy, Sell, ???, Profit


13. Controlling the way a currency system works enables you to manipulate:

  - nothing. All currencies are impossible to manipulate.
  - kittens.
  - the weather.
  - where tokens go. (Correct!)

## Currency Design

### Cryptocurrencies

Bitcoin replicating old world money problems. E.g. artificial scarcity, centralized issuance mining pools.
currencies - Being able to see flows using tokens - Current-Sees

Issuance - How does the money come into being? Blockchain currencies are also fiat.
Interplay - Interaction, interfacing with other currencies.
Currency Life Cycle:
Issuance, Transaction, Interplay, Redemption & Retirement

System Lifecycle
Conceive, Design, Build, Launch, Adopt & Manage, Evaluate, Redesign, Re-Build, Wind-Down, Close
Hold Vision and Purpose
Governance & Decision Making

### Current-Sees

We only know one type of Current-See, fiat money which we see at the point of transaction.
We miss the range of expression that's possible with Current Sees.


Intrinsic Data Integrity
Separating data integrity from data security and ownership.

The power of currencies is about so much more than money.
Current-Sees: Shared symbol systems for shaping enabling and measuring flows.

## Creating User Interfaces for Holochain

You can create user interfaces for Holochain apps using tools such as React, jsLib, and QML to use in the Holochain browser, HoloSqape. We've also created a JavaScript library that you can use to connect a Holochain app to a web page.

### QML and Holochain

QML (Qt Modeling Language) is a user interface markup language. It is a declarative language for designing user-interface centric applications.  
Visit https://github.com/holochain/holosqape to read about how to create user interfaces for Holosqape with QML.  
[A QML engine in a web browser](https://github.com/qmlweb/qmlweb)

### Holochain and React

Go to: https://github.com/holochain/hc-ts-template
Follow the instructions to set up the Typescript + React + Redux + holochain starter app.

Given holochain DNA, generate a swagger / openapi spec file / static swagger-ui html - [dna-to-openapi](https://github.com/holochain/dna-to-openapi)

## Holochain Rust

- [Holochain Developer Preview Release](https://medium.com/holochain/holochain-developer-preview-release-56d0ede52da)
- [Holochain Rust Releases](https://github.com/holochain/app-spec-rust/releases)

The developer documentation for that version is in two places:
- [holochain-rust](https://holochain.github.io/holochain-rust)  
- [Holochain Rust API Docs](https://holochain.github.io/rust-api/)

# Mutual Credit Cryptocurrency

http://ceptr.org/whitepapers/mutual-credit

# Holochain AMAs

## AMA 18 with Matt Schutte

- Holochain Rust Refactor
- AssemblyScript SDK
- Holochain Native on Mobile Phones

# Links / References

- [How to contribute to Holochain Rust book](https://github.com/holochain/holochain-rust/blob/develop/doc/holochain_101/src/how_to_contribute.md)
- [Holochain: Reinventing Applications by Nicolas Luck (Medium)](https://medium.com/holochain/holochain-reinventing-applications-d2ac1e4f25ef)
- [(Medium) Holo’s ERC20 token (HOT) and Mutual Credit Cryptocurrency (Holo fuel)](https://medium.com/h-o-l-o/holos-erc20-token-hot-and-mutual-credit-cryptocurrency-holo-fuel-6d8b6d3938d6)
- https://github.com/Holochain/holochain-proto/wiki/FAQ#how-is-holochain-different-from-a-dht-distributed-hash-table
