import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-latin-america');
}

export default function ZezeniaOnlineNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-latin-america" />;
}
