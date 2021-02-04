# DomainExample

This project is meant to be used to show examples of the domain schematics and to reproduce issues.

## Shared domains example 

Run npm run create-shared-example-domains after npm install to create the domains below. In these domains there are the three types of shared domain folders.

bank-application // application grouping folder
 - dashboard // domain with no child domains
 - cash-account // parent domain grouping folder
   - transaction-history // child domain grouping folder
   - account-details
   - shared // content in this shared is expected to be used across child domains in the parent domain cash-account in the bank-application
 - shared // content in this shared is expected to be used across domains in the bank-application

shared // content in this shared is expected to be used across applications
 - components
   - button
   - table

There are three types of ways things can get shared.

 - shared between applications. Examples of this might be basic components, e.g. buttons or tables. It often can make sense for these kinds of things to be shared to reduce duplication and allow UX consistency between the applications
 - shared between domains in an application. When you are breaking an application down into domains, you can come across things that are used across many domains, but don't necessarily deserve their own domain. My view is that if you have a domain with just one service or one component then you have probably broken it down too far. This type of shared domain gives you a place to put these kinds of things.
 - shared inside a particular domain. It can often make sense to break a domain down further. This is what parent and child domains allow. For example, a parent domain cash-account might have a few different child domains inside it like transaction-history and account details. These child domains might both use some component, e.g. a header. This header would go in the domain cash-account/shared.