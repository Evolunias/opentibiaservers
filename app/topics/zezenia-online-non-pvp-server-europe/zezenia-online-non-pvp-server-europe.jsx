import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-europe');
}

export default function ZezeniaOnlineNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-europe" />;
}
