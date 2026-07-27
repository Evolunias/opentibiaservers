import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-usa');
}

export default function ZezeniaOnlineNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-usa" />;
}
