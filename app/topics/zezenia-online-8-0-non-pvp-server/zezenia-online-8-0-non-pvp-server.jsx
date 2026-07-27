import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-0-non-pvp-server');
}

export default function ZezeniaOnline80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-0-non-pvp-server" />;
}
