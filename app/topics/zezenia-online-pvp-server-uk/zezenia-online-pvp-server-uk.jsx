import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-uk');
}

export default function ZezeniaOnlinePvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-uk" />;
}
