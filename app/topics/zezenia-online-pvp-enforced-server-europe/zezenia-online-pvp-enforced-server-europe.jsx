import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-enforced-server-europe');
}

export default function ZezeniaOnlinePvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-enforced-server-europe" />;
}
