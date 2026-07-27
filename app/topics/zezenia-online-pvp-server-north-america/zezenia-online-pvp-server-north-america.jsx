import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-north-america');
}

export default function ZezeniaOnlinePvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-north-america" />;
}
