import Link from '~/components/lv1/Link';
export default {
  title: 'Design/lv1/Link',
  component: Link,
  argTypes: {
    url: {
      description: 'リンク先',
      control: 'text',
      defaultValue: 'https://www.google.com',
    },
    isBlank: {
      description: 'リンクのBlank指定',
      control: 'boolean',
      defaultValue: false,
    },
    underline: {
      description: 'リンクの下線指定',
      control: 'boolean',
      defaultValue: false,
    },
    sameRoute: {
      description: 'emitイベント',
      action: 'same route',
    },
    default: {
      description: 'Link名指定',
      table: {
        category: 'slots'
      },
      control: {
        type: 'text'
      },
      defaultValue: 'LINK名が入ります',
    },
  },
};

export const DefaultLink = (args, { argTypes }) => ({
    components: { Link },
    props: Object.keys(argTypes),
    template: `<Link @sameRoute="sameRoute" v-bind="$props">${args.default}</Link>`,
});
