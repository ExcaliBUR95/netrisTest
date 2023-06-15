// jest.config.js

module.exports = {
    // Дополнительные настройки Jest
    // ...
  
    // Настройки для тестирования React-компонентов
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./setupTests.ts'],
  
    // Регулярное выражение для сопоставления файлов с тестами
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  
    // Путь к корневой папке проекта
    rootDir: './',
  
    // Исключить из тестирования папку node_modules
    modulePathIgnorePatterns: ['<rootDir>/node_modules'],
  
    // Настройки для обработки файлов с помощью Babel
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.jsx?$': 'babel-jest',
    },
  
    // Дополнительные настройки Babel (если нужны)
    // ...
  
    // Настройки для исключения из тестирования определенных файлов
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/build/',
      '<rootDir>/dist/',
    ],
  
    // Покрытие кода тестами
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
  
    // Другие настройки Jest
    // ...
  };
  