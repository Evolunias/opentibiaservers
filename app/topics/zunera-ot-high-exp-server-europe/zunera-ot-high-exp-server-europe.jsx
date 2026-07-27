import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-high-exp-server-europe');
}

export default function ZuneraOtHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-high-exp-server-europe" />;
}
