import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const not = new Notification({
      content: new Content('nova solicitação de algo'),
      category: 'social',
      recipientId: 'example-recipent-id',
    });
    expect(not).toBeTruthy();
  });
});
