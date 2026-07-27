import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-online');
}

export default function XanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="xanteria-online" />;
}
