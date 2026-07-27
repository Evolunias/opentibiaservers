import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-old-school-server-poland');
}

export default function ZuneraOtOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-old-school-server-poland" />;
}
