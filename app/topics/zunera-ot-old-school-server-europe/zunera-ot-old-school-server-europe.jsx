import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-old-school-server-europe');
}

export default function ZuneraOtOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-old-school-server-europe" />;
}
