import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-events');
}

export default function ZezeniaOnlineEventsKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-events" />;
}
