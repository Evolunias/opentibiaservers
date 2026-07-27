import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-low-exp-server-poland');
}

export default function ZezeniaOnlineLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-low-exp-server-poland" />;
}
