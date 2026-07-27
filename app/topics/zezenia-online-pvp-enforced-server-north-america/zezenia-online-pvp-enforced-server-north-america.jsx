import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-enforced-server-north-america');
}

export default function ZezeniaOnlinePvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-enforced-server-north-america" />;
}
