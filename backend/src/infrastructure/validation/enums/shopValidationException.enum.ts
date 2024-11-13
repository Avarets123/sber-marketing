export enum ValidationExceptionMessagesEnum {
  FIELD_MUST_BE_STRING = 'Поле должно быть строкового типа!',
  FIELD_MUST_BE_NUMBER = 'Поле должно быть числового типа!',
  FIELD_MUST_BE_BOOLEAN = 'Поле должно быть логического типа!',
  FIELD_MUST_BE_ARRAY = 'Поле должно быть  списком!',
  FIELD_MUST_NOT_BE_EMPTY = 'Поле не должно быть пустым!',
  FIELD_MUST_BE_UUID = 'Поле должно быть типа UUID!',
  FIELD_MUST_BE_ENUM = 'Заданo непредустановленное значение!',
  FIELD_MUST_BE_STRING_DATE = 'Поле должно быть дата строкового типа!',

  ARRAY_MUST_BE_MIN_SIZE_ONE = 'Список должен содержать минимум одно значение!',
  ARRAY_ITEMS_MUST_BE_STRING = 'Список должен содержать строковые значения!',
  ARRAY_ITEMS_MUST_BE_UUID = 'Список должен содержать только UUID!',

  MIN_NUMBER_MUST_BE_ONE = 'Минимальное значение должно быть 1!',
  MIN_NUMBER_MUST_BE_ZERO = 'Минимальное значение должно быть 0!',

  MIN_NUMBER_MUST_BE_TEN = 'Минимальное значение должно быть 10!',
  MAX_NUMBER_MUST_BE_HUNDRED = 'Максимальное значение должно быть 100!',
  GREATER_THAN_OR_EQUAL_TO_0 = 'Значение должно быть >= 0',
  MORE_THAN_0 = 'Значение должно быть > 0',
  INCORRECT_EMAIL = 'Некорректный E-mail',
  INCORRECT_PHONE = 'Некорректный номер телефона',
}
