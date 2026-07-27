import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-fresh-start-server-europe');
}

export default function ZuneraOtFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-fresh-start-server-europe" />;
}
