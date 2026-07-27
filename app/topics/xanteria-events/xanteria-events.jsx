import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-events');
}

export default function XanteriaEventsKeywordPage() {
  return <StaticKeywordPage slug="xanteria-events" />;
}
