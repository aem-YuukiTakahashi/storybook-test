import Button from '~/components/lv1/button/Index';
export default {
  title: 'Design/lv1/Button/Index',
  component: Button,
  argTypes: {
    url: {
      description: 'ボタンのリンク先',
      control: 'text',
      defaultValue: 'https://www.google.com',
    },
    type: {
      description: 'ボタンのタイプ',
      control: {
        type: 'select',
        options: ['button', 'submit'],
        labels: {
          button: 'button',
          submit: 'submit'
        },
      },
      defaultValue: 'button',
    },
    disabled: {
      description: 'ボタンの活性・非活性',
      control: 'boolean',
      defaultValue: false,
    },
    default: {
      description: 'ボタン名',
      control: 'text',
      defaultValue: 'BUTTON',
      table: {
        category: 'slots'
      },
    },
  },
};

export const DefaultButton = (args, { argTypes }) => ({
    components: { Button },
    props: Object.keys(argTypes),
    template: `<Button v-bind="$props">${args.default}</Button>`,
});
