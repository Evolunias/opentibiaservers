import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-low-exp-server-europe');
}

export default function ZuneraOtLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-low-exp-server-europe" />;
}
