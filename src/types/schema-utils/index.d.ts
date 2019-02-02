declare module "schema-utils" {
  /**
   * @param schema - A JSON Schema that defines the valid options
   * @param options - The options to validate
   * @param name - The name of the loader/plugin. Used for error messages.
   */
  type ValidateOptions = (schema: string | object, options: object, name?: string) => boolean;

  const validateOptions: ValidateOptions;
  export = validateOptions;
}
