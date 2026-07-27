import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-enforced-server-france');
}

export default function ZezeniaOnlinePvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-enforced-server-france" />;
}
