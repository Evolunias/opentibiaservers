import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-low-exp-server-france');
}

export default function ZezeniaOnlineLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-low-exp-server-france" />;
}
