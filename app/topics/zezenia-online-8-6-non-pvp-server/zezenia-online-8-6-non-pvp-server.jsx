import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-6-non-pvp-server');
}

export default function ZezeniaOnline86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-6-non-pvp-server" />;
}
