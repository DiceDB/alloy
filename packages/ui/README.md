# UI

This is an [internal package](https://turbo.hector.im/repo/docs/handbook/sharing-code/internal-packages) that contains the shared UI components for all the applications in this repository.

> [!NOTE]
> This package, as-is, is not meant to be published to npm. It is meant to be used as a shared codebase for all the applications in this repository. To publish this, we would need to add a **build** step and publish the build output to npm similar to any other package.
> We intentionally do not have a build step for this package, as it is meant to be imported directly from the source code.
>
> If you are looking to publish this package to npm, please reach out to the maintainers and refer to [this guide](https://turbo.hector.im/repo/docs/handbook/publishing-packageshttps://turbo.hector.im/repo/docs/handbook/publishing-packages)

## Usage

To use this package in your application, you can import the components directly from the source code.

```tsx
import CLI from '@dicedb/ui/CLI';
```

```jsonc
{
    /* package.json */
    "dependencies": {
        "@dicedb/ui": "workspace:*"
    }
}
```

## Adding a new component

```shell
cd ./packages/ui
pnpm generate:component

```
