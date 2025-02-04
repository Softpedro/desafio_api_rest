import { StatusValue } from '../../../comoon/domain/status.value';

export class Author {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly books: string[],
    public status: string = StatusValue.ACTIVE,
  ) {}

  deactivate(): void {
    this.status = StatusValue.INACTIVE;
  }
}
