import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-old-school-server-uk');
}

export default function ZuneraOtOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-old-school-server-uk" />;
}
