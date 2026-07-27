import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-status');
}

export default function ZuneraOtStatusKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-status" />;
}
