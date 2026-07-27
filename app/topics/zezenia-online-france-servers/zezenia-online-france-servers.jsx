import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-france-servers');
}

export default function ZezeniaOnlineFranceServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-france-servers" />;
}
