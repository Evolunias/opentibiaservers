import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-mexico');
}

export default function ZezeniaOnlineNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-mexico" />;
}
