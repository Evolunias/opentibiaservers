import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-10-0-non-pvp-server');
}

export default function ZezeniaOnline100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-10-0-non-pvp-server" />;
}
