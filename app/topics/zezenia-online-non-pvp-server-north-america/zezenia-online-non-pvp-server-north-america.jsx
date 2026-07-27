import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-north-america');
}

export default function ZezeniaOnlineNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-north-america" />;
}
