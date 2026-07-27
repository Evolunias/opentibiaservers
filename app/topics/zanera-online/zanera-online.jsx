import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-online');
}

export default function ZaneraOnlineKeywordPage() {
  return <StaticKeywordPage slug="zanera-online" />;
}
