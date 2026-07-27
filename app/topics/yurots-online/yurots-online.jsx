import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-online');
}

export default function YurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="yurots-online" />;
}
