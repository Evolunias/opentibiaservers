import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-high-exp');
}

export default function ZuneraOtHighExpKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-high-exp" />;
}
