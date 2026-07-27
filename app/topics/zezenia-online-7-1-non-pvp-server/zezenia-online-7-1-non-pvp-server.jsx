import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-7-1-non-pvp-server');
}

export default function ZezeniaOnline71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-7-1-non-pvp-server" />;
}
