import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-docs"],
	framework: "@storybook/react-vite",
	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			// Speeds up Storybook build time
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
			// Makes union prop types like variant and size appear as select controls
			shouldExtractLiteralValuesFromEnum: true,
			// Makes string and boolean types that can be undefined appear as inputs and switches
			shouldRemoveUndefinedFromOptional: true,
			// Filter out third-party props from node_modules except @mui packages
			propFilter: (prop) =>
				prop.parent
					? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
					: true,
		},
	},
};

export default config;
