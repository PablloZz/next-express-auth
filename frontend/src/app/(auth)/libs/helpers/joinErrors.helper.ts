const ERRORS_DELIMITER = ". ";

function joinErrors<T extends Record<string, string[]>>(errors: T, fieldName: keyof T): string {
  return errors[fieldName] ? errors[fieldName].join(ERRORS_DELIMITER) : "";
}

export { joinErrors };
