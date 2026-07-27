import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-old-school-server-germany');
}

export default function ZuneraOtOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-old-school-server-germany" />;
}
