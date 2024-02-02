export class Config{
  readonly API_URL : string = 'http://64.23.144.76:8080';

  static getApiUrl(): string {
    return new Config().API_URL;
  }
}
