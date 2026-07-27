import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-canada');
}

export default function ZezeniaOnlineNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-canada" />;
}
