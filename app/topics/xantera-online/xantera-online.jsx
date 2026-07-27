import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-online');
}

export default function XanteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="xantera-online" />;
}
