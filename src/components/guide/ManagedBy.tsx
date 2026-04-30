import "./managed-by.css";
import {
  managingOrganizations,
  type ManagingOrgKey,
} from "../../data/managingOrganizations";

interface ManagedByProps {
  organization: ManagingOrgKey;
}

const ManagedBy = ({ organization }: ManagedByProps) => {
  const org = managingOrganizations[organization];

  if (!org) {
    if (import.meta.env.DEV) {
      console.warn(`ManagedBy: unknown organization key "${organization}"`);
    }
    return null;
  }

  return (
    <div className="managed-by">
      <p className="managed-by__heading">Managed by {org.name}</p>
      <p className="managed-by__description">{org.shortDescription}</p>
      <p className="managed-by__support">
        {org.supportPartner ? (
          <>
            If you've enjoyed these trails, consider supporting{" "}
            <a
              className="managed-by__support-link"
              href={org.supportUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {org.supportPartner}
            </a>
            , the nonprofit partner that funds projects and programs at this
            location.
          </>
        ) : (
          <a
            className="managed-by__support-link"
            href={org.supportUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            If you've enjoyed these trails, consider supporting their work →
          </a>
        )}
      </p>
      <a
        className="managed-by__org-link"
        href={org.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit {org.name} →
      </a>
    </div>
  );
};

export default ManagedBy;
