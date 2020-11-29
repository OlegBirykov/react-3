import Mess from "./Mess"

const messages = [
  new Mess(
    'chat-5-1090',
    { name: 'Ольга' },
    'response',
    '10:10',
    'Привет, Виктор. Как дела? Как идет работа над проектом?'
  ),
  new Mess(
    'chat-5-1091',
    { name: 'Виктор' },
    'message',
    '10:12',
    'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
  ),
  new Mess(
    'chat-5-1092',
    { name: 'Ольга' },
    'response',
    '10:14',
    'Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
  ),
  new Mess(
    'chat-5-1093',
    { name: 'Виктор' },
    'message',
    '10:20',
    'Нет, все прошло гладко. Очень хочу показать всё команде.'
  ),
  new Mess(
    'chat-5-1094',
    { name: 'Виктор' },
    'typing',
    '10:31'
  )
];

export default messages;
